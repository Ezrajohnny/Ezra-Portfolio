// Vercel Speed Insights initialization
// This initializes the Speed Insights tracking for the portfolio

(function() {
  // Initialize the Speed Insights queue
  window.si = window.si || function() {
    (window.siq = window.siq || []).push(arguments);
  };
  
  // Create and inject the Speed Insights script
  var script = document.createElement('script');
  script.src = '/_vercel/speed-insights/script.js';
  script.defer = true;
  
  // Append to document head
  document.head.appendChild(script);
})();
