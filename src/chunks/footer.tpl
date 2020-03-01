<!-- Footer.tpl -->
<footer class="footer">
  <div class="footer__container container">
    <div class="footer-main row">
      <div class="col s12 m8 l8">
        <nav class="footer-navigation">
          <div class="row">
            <div class="col s6 m6 l6">
              <a href="#block-[[#15.alias]]" data-scrollto="#block-[[#15.alias]]">[[#15.pagetitle]]</a>
              <a href="#block-[[#16.alias]]" data-scrollto="#block-[[#16.alias]]">[[#16.pagetitle]]</a>
              <a href="#block-[[#17.alias]]" data-scrollto="#block-[[#17.alias]]">[[#17.pagetitle]]</a>
              <a href="#block-[[#18.alias]]" data-scrollto="#block-[[#18.alias]]">[[#18.pagetitle]]</a>
              <a href="#block-[[#19.alias]]" data-scrollto="#block-[[#19.alias]]">[[#19.menutitle:default=`[[#19.pagetitle]]`]]</a>
            </div>
            <div class="col s6 m6 l6">
              <a href="#block-[[#21.alias]]" data-scrollto="#block-[[#21.alias]]">[[#21.pagetitle]]</a>
              <a href="#block-[[#20.alias]]" data-scrollto="#block-[[#20.alias]]">[[#20.pagetitle]]</a>
              <a href="#block-[[#22.alias]]" data-scrollto="#block-[[#22.alias]]">[[#22.pagetitle]]</a>
              <a href="#block-[[#23.alias]]" data-scrollto="#block-[[#23.alias]]">[[#23.pagetitle]]</a>
              <a href="#block-[[#24.alias]]" data-scrollto="#block-[[#24.alias]]">[[#24.pagetitle]]</a>
            </div>
          </div>
        </nav>
      </div>
      <div class="col s12 m4 l4">
        <address class="footer__address">
          [[++address]]
        </address>
        <a class="footer__email" href="mailto:[[++email_1]]" title="Отправить нам e-mail">
          [[++email_1]]
        </a>
        <a class="footer__phone" href="tel:[[++phone_1:replace=` ==`:replace=`+7==8`:replace=`-==`]]">
          [[++phone_1]]
        </a>
      </div>
    </div>
    <div class="footer__copyright">
      &copy; [[!quasiYears? &current=`1`]] Copyright [[++site_url:replace=`https://==`:replace=`http://==`:replace=`/==`]]
      <br />
      <br />
      <a href="https://quasi-art.ru/" title="Посетить сайт разработчика" target="_blank">Разработка сайта</a>
    </div>
  </div>
</footer>
<!-- /Footer.tpl -->
