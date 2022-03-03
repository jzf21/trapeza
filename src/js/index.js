import '../scss/style.scss';

import navbar from '../html/components/navbar.html';

document.onload = function() {
  document.getElementById("component-navbar").innerHTML = navbar;
}
if (module.hot) {
    module.hot.accept();
  }