import { useEffect, useRef } from 'react'
import f from './footer.module.scss'

export default function Footer() {

    const mailYandexGooglecountrer = useRef()
    let counters = `
<!-- Top.Mail.Ru counter -->
<script type="text/javascript">
var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "410642", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "tmr-code");
</script>
<noscript><div><img src="https://top-fwz1.mail.ru/counter?id=410642;js=na" style="position:absolute;left:-9999px;" alt="Top.Mail.Ru" /></div></noscript>
<!-- /Top.Mail.Ru counter -->
<!-- Top.Mail.Ru logo -->
<a href="https://top-fwz1.mail.ru/jump?from=410642" >
<img src="https://top-fwz1.mail.ru/counter?id=410642;t=470;l=1" height="31" width="88" alt="Top.Mail.Ru" style="border:0;"></a>
<!-- /Top.Mail.Ru logo -->

           
		   <!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter21341830 = new Ya.Metrika({id:21341830,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/21341830" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
            <!-- /Google Analytics -->
            <script type="text/javascript">
                var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
                document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
            </script><script src="https://ssl.google-analytics.com/ga.js" type="text/javascript"></script>
            <script type="text/javascript">
                try {
                    var pageTracker = _gat._getTracker("UA-15394172-1");
                    pageTracker._trackPageview();
                } catch(err) {}</script>
            <!-- /Google Analytics  -->

        `

    useEffect(() => {
        mailYandexGooglecountrer.current.innerHTML = counters
        return () => { }
    }, [])



    return <div className={`${f.container} max_width`}>


        <div className={f.block1}>

            <p>© Федеральное государственное
                <br />
                бюджетное учреждение культуры
                <br />
                Российская государственная
                <br />
                библиотека искусств
            </p>

            <p>
                <a href="mailto:bisk@liart.ru">
                    bisk@liart.ru
                </a>
            </p>

            <p ref={mailYandexGooglecountrer}>



            </p>
        </div>

        <div className={f.block2}>

            <ul className="footer_link">

                <li>
                    <a href="/ru/pages/index/">
                        О библиотеке
                    </a>
                </li>

                <li>
                    <a href="/ru/pages/service/">
                        Услуги
                    </a>
                </li>

                <li>
                    <a href="/ru/pages/fonds/">
                        Фонды
                    </a>
                </li>

                <li>
                    <a href="/ru/pages/catalogs/">
                        Каталоги
                    </a>
                </li>

                <li>
                    <a href="https://liart.ru/ru/pages/index/korrupt/">
                        Противодействие коррупции
                    </a>
                </li>

            </ul>

        </div>

        <div className={f.block3}>

            <ul className="footer_link">

                <li>
                    <a href="/ru/news/">
                        Новости
                    </a>
                </li>
                <li>
                    <a href="/ru/pages/eresorses/">
                        Электронные ресурсы
                    </a>
                </li>
                <li >
                    <a href="https://liart.ru/ru/gallery/">
                        Галерея
                    </a>
                </li>
                <li>
                    <a href="/ru/pages/contacts/">
                        Контакты
                    </a>
                </li>


            </ul>

        </div>
        <div className={f.block4}>

            <p>
                Наши адреса:
                <br />
                
                    {/* <a href="https://liart.ru/ru/pages/index/adress"> */}
                    <a href="http://localhost:3000/service">
                        Адреса на картах
                    </a>
                
            </p>

            <p>Читальные залы:
                <br />
                107031, Россия, Москва,
                <br />
                Большая Дмитровка, 8/1
            </p>

            <p >Абонемент:
                <br />
                127051, Россия, Москва, Петровские
                <br />
                линии, д.1
            </p>

        </div>

        <div className={f.block5}>

            <p>
                Разработчик сайта:
                <a href="https://obs.ruslan.ru/">
                    <b> ООО «Открытые библиотечные системы»</b>
                </a>
                , ПО
                <a href="https://obs.ruslan.ru/?product:biblioportal">
                    <b> «Библиопортал» </b>
                </a>
                . Дизайн сайта: АНО Центр культуры и искусства
                <a href="https://www.mediaartlab.ru/">
                    <b> «МедиаАртЛаб» </b>
                </a>
                . При использовании материалов прямая ссылка на сайт

                <a href="https://www.liart.ru">
                    <b> www.liart.ru </b>
                </a>

                обязательна.
            </p>

        </div>

    </div>
}