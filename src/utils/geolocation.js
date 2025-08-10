/**
 * Utility functions for geolocation
 */

/**
 * Get user's IP address and technical information that can help identify their origin
 * @returns {Promise<Object>} Data including IP, timezone, browser info, etc.
 */
export const getUserLocationData = async () => {
  try {
    // Get IP data from ipinfo.io
    const response = await fetch('https://ipinfo.io/json');
    const ipData = await response.json();
    
    // Get browser timezone and locale information
    const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const browserLocale = navigator.language || navigator.userLanguage;
    const screenInfo = `${window.screen.width}x${window.screen.height}`;
    const userAgent = navigator.userAgent;
    
    // Check if timezone from IP matches browser timezone (mismatch could indicate VPN/proxy)
    const ipTimezone = ipData.timezone || 'Unknown';
    const timezoneMatch = ipTimezone === browserTimezone;
    
    // Detect possible VPN/proxy use
    const possibleVPN = !timezoneMatch || ipData.org?.toLowerCase().includes('proxy') || 
                       ipData.org?.toLowerCase().includes('vpn') || 
                       ipData.hostname?.toLowerCase().includes('proxy') || 
                       ipData.hostname?.toLowerCase().includes('vpn');
    
    return {
      ip: ipData.ip || 'Unknown',
      ipCity: ipData.city || 'Unknown',
      ipRegion: ipData.region || 'Unknown',
      ipCountry: ipData.country || 'Unknown',
      ipCoordinates: ipData.loc || 'Unknown',
      ipTimezone: ipTimezone,
      ipProvider: ipData.org || 'Unknown',
      browserTimezone: browserTimezone,
      browserLocale: browserLocale,
      screenResolution: screenInfo,
      userAgent: userAgent,
      possibleVPN: possibleVPN,
      timezoneMatch: timezoneMatch
    };
  } catch (error) {
    console.error('Error getting user data:', error);
    return {
      ip: 'Error',
      error: error.message
    };
  }
};

/**
 * Format user data into a readable string for email
 * @param {Object} userData - User data from getUserLocationData
 * @returns {String} Formatted user data string
 */
export const formatLocationForEmail = (userData) => {
  if (!userData) return 'User data unavailable';
  
  // Format the data for email
  return `
===== TECHNICAL INFORMATION =====
IP Address: ${userData.ip}
IP Location: ${userData.ipCity}, ${userData.ipRegion}, ${userData.ipCountry}
IP Coordinates: ${userData.ipCoordinates}
IP Timezone: ${userData.ipTimezone}
Internet Provider: ${userData.ipProvider}

===== BROWSER INFORMATION =====
Browser Timezone: ${userData.browserTimezone}
Browser Language: ${userData.browserLocale}
Screen Resolution: ${userData.screenResolution}
User Agent: ${userData.userAgent}

===== SECURITY ANALYSIS =====
Timezone Match: ${userData.timezoneMatch ? 'Yes ✓' : 'No ⚠️'}
Possible VPN/Proxy: ${userData.possibleVPN ? 'Yes ⚠️' : 'No ✓'}
`;
};
