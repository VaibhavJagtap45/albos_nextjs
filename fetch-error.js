const http = require('http');
http.get('http://localhost:3000/services/iot-application-development-services', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Next.js dev server error overlay contains the error
    const match = data.match(/<title>([^<]+)<\/title>/);
    console.log("TITLE:", match ? match[1] : 'No title');
    
    // Look for error message in __nextjs_dev_tools
    const nextDataMatch = data.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
    if(nextDataMatch) {
        try {
            const parsed = JSON.parse(nextDataMatch[1]);
            console.log(JSON.stringify(parsed.err, null, 2));
        } catch(e) {}
    }
    
    // Fallback: look for "Error: ..."
    const errorString = data.match(/Error: [^<]+/g);
    if (errorString) {
        console.log("ERRORS:", errorString.slice(0, 5));
    }
  });
});
