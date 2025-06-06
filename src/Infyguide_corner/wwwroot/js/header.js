document.write(`<header id="header" class="header">
<div class="container">
  <div class="container__fl">
    <a class="logo__container" href="index.html">
      <!-- Logo -->
      <img class="logo" src="../img/logo_massage.png" alt="logo" />
    </a>
    <div class="menu__container">
      <div class="div__menu">
        <!-- Hamburger icon -->
        <input class="side__menu" type="checkbox" id="side__menu" />
        <label class="hamb" for="side__menu"
          ><span class="hamb__line"></span
        ></label>
        <!-- Menu -->
        <nav class="nav">
          <ul class="menu">
            <li>
              <a id="lng__services__ul" class="lng__services__ul" href="index.html">Services</a>
              <ul class="menu__under">
                <li><a id="lng__spa" class="lng__spa" href="spa.html">Banking/Insurance</a></li>
                <li><a id="lng__for__two" class="lng__for__two" href="for_two.html">E-Commerece</a></li>
                <li><a id="lng__tai__massage" class="lng__tai__massage" href="tai.html">Travel</a></li>
                <li><a id="lng__gav__massage" class="lng__gav__massage" href="gavai.html">Entertainment</a></li>
                <li><a id="lng__fire__massage" class="lng__fire__massage" href="fire.html">Medical</a></li>
                <li><a id="lng__stone__massage" class="lng__stone__massage" href="stone.html">Food/Grocceries</a></li>
                <li><a id="lng__anticell__massage" class="lng__anticell__massage" href="anticellulite.html">Pharmecitucals</a></li>
                <li><a id="lng__face__massage"  class="lng__face__massage" href="face.html">Education</a></li>
                <li><a id="lng__face__massage"  class="lng__face__massage" href="face.html">Finance</a></li>
              </ul>
            </li>
            <li><a id="lng__rules" class="lng__rules" href="rules.html">Regulations</a></li>
            <li><a id="lng__contacts" class="lng__contacts" href="contacts.html">Contact Us</a></li>
            <li><a id="lng__price__and__discounts" class="lng__price__and__discounts" href="price_and_discounts.html">Best Deals</a></li>
            <li><a id="lng__trainings" class="lng__trainings" href="trainings.html">Language Translate</a></li>
            <li>
              <a id="lng__gift__certificates" class="lng__gift__certificates" href="gift_certificates.html">Login/Register</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="select">
        <select name="slct" id="slct">
          <option value="ua" selected="selected">Украї́нська</option>
          <option value="ru">Русский</option>
        </select>
      </div>
    </div>
  </div>
</div>
</header>`);