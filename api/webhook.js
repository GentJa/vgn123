// Vercel serverless function for handling webhooksasdasd
export default function handler(req, res) {
  // Only allow POST requests for webhook data
  if (req.method === 'POST') {
    try {
      // Log the webhook payload
      console.log('Received webhook from Vercel:', JSON.stringify(req.body, null, 2));
      // Process the webhook data as needed
      // For example, you could send notifications, trigger other processes, etc.
      // Return success response
      return res.status(200).json({
        success: true,
        message: 'Webhook received successfully',
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error processing webhook:', error);
      return res.status(500).json({
        success: false,
        message: 'Error processing webhook',
        error: error.message
      });
    }
  }
  // Handle GET requests for testing/health checks
  else if (req.method === 'GET') {
    return res.status(200).json({
      status: 'Webhook endpoint is running',
      message: 'Send POST requests to this endpoint to use the webhook'
    });
  }
  // Method not allowed for other request types
  else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} Not Allowed`
    });
  }
}








