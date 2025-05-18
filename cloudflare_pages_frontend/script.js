
window.onload = function() {
  setTimeout(function() {
    const iframe = document.getElementById("igFrame");
    try {
      const evt = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
      iframe.dispatchEvent(evt);
    } catch (e) {
      console.log("Click fallito:", e);
    }
  }, Math.random() * 800 + 400);
};
