// Zedgehost Footer Component
const zedgeFooterHTML = `
<footer class="footer__area has-animation footer__area-two">
  <div class="footer__top footer__top-two">
    <div class="container">
      <div class="footer__top-inner footer__top-inner-two">
        <div class="footer__offer footer__offer-two">
          <div class="section__title white-title">
            <h2 class="title">Enjoy exclusive savings of up to <span>45%</span> on hosting and receive a <span>complimentary domain</span> with your plan.</h2>
          </div>
          <div class="footer__offer-btn"> <a href="index.html" class="tg-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 9L14 12L11 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            Get Started </a> </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="footer__widget">
              <div class="footer__logo mb-15"> <a href="https://www.zedgehost.com/"><img src="assets/img/logo.svg" alt="Zedgehost Logo" width="150" height="40"></a> </div>
              <div class="footer__content footer__content-two">
                <p>Zedgehost provides reliable, ultra-fast, and secure web hosting, VPS, and domain registration services to empower your online journey.</p>
              </div>
              <div class="footer__social footer__social-two"> <span class="title">Get Connected</span>
                <ul class="list-wrap">
                  <li><a href="index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="22px">
                      <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"></path>
                    </svg>
                    </a></li>
                  <li><a href="index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="22px">
                      <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"></path>
                    </svg>
                    </a></li>
                  <li><a href="index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="22px">
                      <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"></path>
                    </svg>
                    </a></li>
                  <li><a href="index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="22px">
                      <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"></path>
                    </svg>
                    </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer__widget footer__widget-two">
              <h4 class="footer__widget-title">Hosting</h4>
              <div class="footer__link">
                <ul class="list-wrap">
                  <li><a href="shared-hosting.html">Shared Hosting</a></li>
                  <li><a href="wordpress-hosting.html">WordPress Hosting</a></li>
                  <li><a href="cloud-hosting.html">Cloud Hosting</a></li>
                  <li><a href="dedicated-server.html">Dedicated Server</a></li>
                  <li><a href="siteLock.html">Website Security</a></li>
                  <li><a href="linux-vps-server.html">VPS Hosting</a></li>
                  <li><a href="reseller-hosting.html">Reseller Hosting</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer__widget footer__widget-two">
              <h4 class="footer__widget-title">Domain</h4>
              <div class="footer__link">
                <ul class="list-wrap">
                  <li><a href="domain-search.html">Search Domain</a></li>
                  <li><a href="enterprise-email.html">Enterprise Email</a></li>
                  <li><a href="bussiness-email.html">Business Email</a></li>
                  <li><a href="domain-transfer.html">Domain Transfer</a></li>
                  <li><a href="digicert-certificate.html">SSL Certificate</a></li>
                  <li><a href="gaps.html">Google Apps</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="footer__widget footer__widget-two">
              <h4 class="footer__widget-title">Company</h4>
              <div class="footer__link">
                <ul class="list-wrap">
                  <li><a href="about-us.html">About us</a></li>
                  <li><a href="contact-us.html">Contact us</a></li>
                  <li><a href="index.html">Knowledge Base</a></li>
                  <li><a href="contact-us.html">Support</a></li>
                  <li><a href="index.html">Datacenter Details</a></li>
                  <li><a href="index.html">Hosting Security</a></li>
                  <li><a href="index.html">Backup and Recovery</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__cart-wrap footer__cart-wrap-two">
        <div class="row">
          <div class="col-md-8">
            <div class="footer__cart-content"> <span class="title">We Accepts</span> <img src="data:image/png;base64,UklGRhQFAABXRUJQVlA4WAoAAAAYAAAASQAAKwAAQUxQSKcBAAABkJVte9tm/vfee+/xEogJiIBN4CPgAnAImIAImEBFIAUgBCYgAjGB50BKr0tXfdSjiJiA5uab39rAb8+b5uYPbeSb5p0289Hv7Xin7fx4raW18gkzs1ZmZoXWJu8HV2rNrK8hC+SpMAK4DlgltfORYp8NRyBVkVwAsCwCQQMQJZc42WaRvK0jJWCS5AB6eWCWFoAUE4skOYpWawaCpBGI0gGY1AGYJGdZKE21RmCRtAB7aQFMBqxOJx1wAEKtHUArByRJAK06gDSeGIGzBKmWFqDXDASpA1ZJkTy5QoKkALS1ZmBUApw0AFGSSxmMkgwImoCzWgbMBlxI8sCs3BfopQPQywBfawcsATiTdACmglzIZjlgda4DLmopwpogSdICWEmKQFDgkms1T3GfAfQyV1iAWekyuFpWcpI6YJVmlnN/fgRwI5cea+2OWZCkAYhS5LTXAkzOOTcAcy3FzLIJuJCOJ46TOoBWknZArGbee6988N6b5PZzjIfZWsm893sVJ++nalf1Gsq/7Xj3cTse3fm9FR+b5s7PTfj3rsnvPLz69282TQMAVlA4IIQCAACQDACdASpKACwAPlEkjUUjoiETNgA4BQSxhljofPhe+i2FF8AXUzkoX7VekAdpukCxo+gfoB+hfYE6Sxnn9zF/u1bsY61Ok9rm6t06Qb7BE4IchY8EKbxmU3rAsKKMLnu1X8oMrUtM9TUn/ogAAP7tvb3mi8jyOLLID/j///idob/eiPo2u/yd3+TvJ3q6fo8vTwBc/f/4t1Hu+7/M5pMJ+LcEHqjviAjJX7P50ev7/MeytJDMTYrn/Xc7msKumWbVJyKPf/9XOh/v0rzZEkGJqmxd57/jkwJyvp5WM3Mcf5VT3m8Jo4HPcY8liCDDxaeu4CRzxOCfUWsN17aZfv9h3b+JBPH9Spoqw0/c6Bz6XNSCQPTnV0k+on5sQHEWvi3qi6R7iNtZ5AIBcoyfw/8pKHkXMTRMeDKYJfKAcsgSbr19eHOyOrvHYztzlBys/s/+n0QGHZ3L/zJFuEyF+v82dbGEOwyW+UQvdZdQX+36P7RSE1STJwxvVzC/39vyCHqYpwX+1VGXlRxk7Ror/XVvid+dt4LcJ8sSfh3nT5H6/sxls5VdOZftw6fofafiJP7yw3roW9aDsS3x76p/ZQdIIBCWF2rQQUKRKIXxwZ7AnaQxaBfmKoRcvO5HEOfcO8aP7Evq8hiI6O3yIqQHneBX73ugmD//UQ67tHFTXfdyNor2srhBpr2Mnpwu3092yIrOCXD5Od5n1QDxChCI8/8f7XVg1SrgiM5lTs6Hzrm6o4PlDxqZ1+KU11OAPVUegpS9f4Bd/5fHWLM4+ZJ2n6AGi8H150jRnPvIriMxjtdQDDpCbiDLipAmuQgGMgVkeqLwqDc3HPxB74S15kodTVF6/b4AAEVYSUa6AAAARXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAEoAAAADoAQAAQAAACwAAAAAAAAA" alt="img"> <img src="data:image/png;base64,UklGRsIEAABXRUJQVlA4WAoAAAAYAAAASgAAKwAAQUxQSFkBAAABkFVte9tImu1997r38hGwCPwEZAI/ARGQCIjAT8ADICKgASAEJmACWQLTi7945zoiJsC5Z1/+4PD/vH/snHv2B9v487FzP7GVX9wLbOfjdxvy8v6l1ua5T8lf4cuuL70VOQTtp9dXgdT96bV9ZPPt9MbLtD+98TGXLKfrzp5pPl17R2Sn6xcaOSX851kqw6mxLBSdJJxyeo5IMnIkEv3vRJKRYyABBzrFCYtRZJZhIVjAgkggQgNbzXCndwVbqYAKeblRC+1Gi4IMkper9l0BxH5NLx50AEI0y+pxtddiJQtWXIeeIcS7UONJrVqTUttYplR7LNVCzaWlUvs4TdIqkWlKsVSYziaa0GyOZTgBGkx36KJkak2bJpvCcWgaNaFraNp0BysTURCRIUhWidkjBok6CCQHyVEUiDHwHOq95emGPHBfNuO9c49/bsSXB8459/b9Fr5wzgEAVlA4IIACAACwDgCdASpLACwAPk0ei0QioaEZnVVUKATEtABkofRhY0W5nLCX+17oD9iP1V94jngOtE9ADyz/Y4/a/0kWiCtfQKhoXkARQFPTdPUUdZknKIH1hPySM9TJrfVsM/eaZvri1bwXhx6Ajdk9+xRn3QKBtuAwbc7WStLSRYsK4gAA/u6P+jYHXt3Qada/9a60D8bcd5c8/+ZyMxaDyLRWiqh0K+KOzE2srwe/EvTVMPbjB1HM/NIb6qycfipon/w0tsHDrNyVeTf+byZfeKx2IYvcTehiYA11W5IAs86AVIBXv/pNXefLD3RrlPyfL4VOfx1OJaYwRd3j1N7f/4IFDTYqvsaT/+/ud0v9TUcHc3ssN5tQ0mK7i3fbuailzl54G5BGjB0mlW/3BkVEGxEBMIGA9Qf4pdVD3GT1QMWxkw1P89BLiCjbqUh2y0q750DT0rHltniySTSv/xz4C/z81uzGEntagYeckeCPQ+mXLys7gIhILXSriZxjo7f7NbSSg3kseHbdh4ME6UrLTnOKw4g3/H8SPBgctdUp2HlAyXH0XWKia6pkuxzt5sVlTK8D+qrASRWBFIzm6s/cGl8df+T5JQHrscCPAHCTVZyneX+9cySPtOtg7jWKLmvkSPhdu3x1EZ+yx9G9VPy1WTxLGa5fXrKEgnqXnDl4bUS4gq1ntooY6Pdhc8rJDMCUTQgDm0UHZQO1jFpd8mC7P17HPz2vkU9cuGM0Vgn+g35f+0t+zMonTwrrlIQNRvwwix1kEjMbv4ziVwXzlVcf/wZ69kQTnB9GPv/fxI0X9813pq8vndduGRCfQxLIVkQt/3K2xF/I8lvv3MsT1uVR9wFGT94ARVhJRroAAABFeGlmAABJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAAEgAAAABAAAASAAAAAEAAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAASwAAAAOgBAABAAAALAAAAAAAAAA=" alt="img"> <img src="data:image/png;base64,UklGRgwFAABXRUJQVlA4WAoAAAAYAAAASQAAKwAAQUxQSKoBAAABkFVte9tI2t77XvVePgL5CfwEbAI/AQeAA2BFQAQ0AGYIZAD8CERABGQC39bU6VcRMQEhPH+P/f/+/lYI4SVOyAfhEU7Kb9dfnRh48P7keHoZJoPp3shq5iSncV86X6Fzkmwe92XG9J9IsmXD9jeHNv1DnKxRsIvryCrOHoAWMgl2czVrZBn+kzkCWlk77OpqkYOVSf41cg6trIq9WE7AyB5DzlGUPQqLaD4cAYuSsgKa8whIOhyhSVPfy4aKA0dVSzusBByZVYbmSyYsa1nSMTRf0rT6kmNkYb/QDbEkZ6pV4Q4gsapWB3xCoaK41gN0nNcjKFNmFqy8krF4NuMCYAaUVTHQgCOCx0A7HlgKfWQprapPWHOlkT2AxB7GCFR2QKICtXSMmDElxoVhZF4YUHwLeQKASNNCQ2ICMPAAiYuBPYzzkRGiHQ8g3YxpC+5/aWP7SdPq+NvZGJEJRPazQjIik8zG+RZU/oKaQCU1/QfMBBAFRAGYKYDOOojKFtasETu/Mas4MdLi5FA5OfbyCsqrk+PR/RPjSwgvT4qHIYQnn06A7+/vhgBWUDggegIAALAMAJ0BKkoALAA+USiQRiOioaEkWAnYcAoJQBl6gRPJ3pmlNgAuFXrAPQA/Wb0pP2A+BT9iv2q9m2XSqiVMN8b/0p7Am2zLqhabtBj9TeElnUQZQat40qZIyyx+U0VQ2+O0kiidc219AeszuZoAAP7tr99Vz+OwPwX8BrGkIJWhvW0ND6zxAaqc23H83+5NuqGS9cysamEF0+QBxknfS+cZQqwSYAxnM7tc3RrCr9slYuT00AikH02RgQ/LoAxw7g/7TNbtj/hfzSv8LM1/ud6tur3/kLaSkqr8SROhUr/BF2vr/g1D/vMV30W5vkW1zcSB3VtWAO4Vv8QWzsd8CAU3vBT88b5YTfFS5f3fbyhFb7v+R/E9UZjie+eiAmbXegv/yO3bvEM15DRVo8UUqyfPIH9TEN/ZnW3cr9cKGWFI9bU0Vr1E8mFetsS23W/TZLbcuRc8nIKX7QU7kicbAEbK2tL2s4jPuPeGSWu4+yenAKTIVufQdL8w/2o7Vz95IcajQXehnc6VThzCJhBR2zAXsTmagDPTFHQUw60p7Th8V16euOMs6XBIERoEl9bgiwwYoTv6qHxh1iHsDqH7mzVEKbOYb87eD0A/iVGl/n1WML1Sj75VW172mKFXNu0ELLWqYPL++5md2DQpo7skupxPtsGQ8oMaU93/PwGhX/LfFCTxAz2hhTcp8Ycorh/WnyvRcY3y21ZyL0mx7+SXVqpP4SDgCkmAaHjk/csYGl7PQ/IeZVnqzY851AY8j+ld9tV/zyuAuEzmOBwYgN/LWQede+0/SL4bb8xteBRhUH/gvmdXIK7Czoo04obngqteAAQOIqOLKzWfAABFWElGugAAAEV4aWYAAElJKgAIAAAABgASAQMAAQAAAAEAAAAaAQUAAQAAAFYAAAAbAQUAAQAAAF4AAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAGYAAAAAAAAASAAAAAEAAABIAAAAAQAAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAABKAAAAA6AEAAEAAAAsAAAAAAAAAA==" alt="img"> <img src="data:image/png;base64,UklGRlYEAABXRUJQVlA4WAoAAAAYAAAASQAAKwAAQUxQSEwBAAABkFRbextJ6p7xanLOOX4ExgREwE1ABNwAygRMQAREYETABvAjEIGfgEzgW7hUrqBVryJiAox58AWX/+d9Y4x5iTr+bEyDWn4xz6uB6/f1aO7e2UlEJLgaOO7fVWAszBUIhbTvv4iEdosXkWgLvfRHkwL9Hq7jlkSSqRDojqYlWXUUBMqWTDiyIGyPxg09Z3jOXaIm7TQCoh0THNUKddKbtOBY3QHDaqQm0uccEhPygpHBcUmZXhkj2VKO1pfUrgKzptFzgKUgcpe1HZlVfc8I6NJxPprfl8ViLXQAIm/RM8Bx4YDAEcCOHpbi6I8WV0uLYmYLYKROmSP+ZUZA6AA4csqcR94eTVYJZZmwjipebmCzWiBKCwA+iZd+EHu0zvXkfMDWyAEnPgzoRPpjWfE4r8u+I/e8Htf3qvHemGeV+NkYY558qcCfN9fGAFZQOCAiAgAA8AwAnQEqSgAsAD5RIo5FI6IhFEwFdDgFBKANLlwL2v0Wo0uE80QD9dusA9AD9gPTF9jP9p/SXT0csDSxM5+gH0di4kAsbBuaOsJGcwrHnpU2mUnpXkAsP3wsOXmzwMLrIjsV/jm/ZegsNef5cYzPAAD+0sMLhXM/8NgkMtM/Thm+2OlQs2peCO9/xdz9Yg9o5EDnaoQ9NTq1zhD8i4Y5wBTyeP+y54S78TDYPvSjcpGzPp4/f1Uf8nzgoMWgkv6Z5JQMFEB9NHuLObO7Oj/EqBN5XH/o047eTY0DRrl5lx3NUi5kJAv0MaZhLvoC9E3Kj2MMHjL6t/K809F7hOyT37VcbaciJ5h1KEsR0pGkz/vRnQNIPYmFXaourLfrUI21teJLGav53NyGXrGYwq2jjTk/qbx5nhFWNONCFqftO75u3vEJ6nQk1iN2LlT9QpmuAR6n6ovZTYcXv0j653OAUv5QdKus2jH61iWPspJPjE6wnyt0bV6Pct1+D+CtpsN0ZxVmFuoo36faTrI4dj9T3XN9TRq43v19vqg4k5WjQW/5RKlzMo8ItQtTiYnqyk+Z5t3oAVy76jWfEnfpiEcXwNdW2IJf5Ko69joPqRYEutFIpsim+GIfWb5w2LEFR8k/Ouc9bTqyFQtx7ZPNqfNqOuwOZzCPawsO/HsD+B5Zdg02EAF67ynD3UNGFAx07qYN3vTVEwBMvUGV8OtSuvIRYwAARVhJRroAAABFeGlmAABJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAAEgAAAABAAAASAAAAAEAAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAASgAAAAOgBAABAAAALAAAAAAAAAA=" alt="img"></div>
          </div>
          <div class="col-md-4">
            <div class="footer__cart-content-right">
                <a href="index.html">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8667 11.5282C11.8667 11.5282 11.918 11.4916 12 11.4289C13.2287 10.4789 14 9.10222 14 7.56955C14 4.71222 11.3133 2.39355 8 2.39355C4.68667 2.39355 2 4.71222 2 7.56955C2 10.4282 4.68667 12.6669 8 12.6669C8.28267 12.6669 8.74667 12.6482 9.392 12.6109C10.2333 13.1576 11.4613 13.6062 12.536 13.6062C12.8687 13.6062 13.0253 13.3329 12.812 13.0542C12.488 12.6569 12.0413 12.0202 11.868 11.5276L11.8667 11.5282Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M5 9C6.66667 10.6667 9.33333 10.6667 11 9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              Live Chat </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer__bottom footer__bottom-two">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 order-0 order-lg-2">
          <div class="footer__bottom-menu">
            <ul class="list-wrap">
              <li> <a href="legal.html">Terms &amp; Conditions</a> </li>
              <li> <a href="refund-policy.html">Refund Policy</a> </li>
              <li> <a href="policy.html">Privacy Policy</a> </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="copy-right-text">
            <p>&copy; 2026 <span>Zedgehost</span>. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
`;

function injectZedgeFooterHTML() {
    if (document.currentScript && document.currentScript.parentNode) {
        document.currentScript.outerHTML = zedgeFooterHTML;
    } else {
        let footerContainer = document.getElementById("zedge-footer");
        if (footerContainer) {
            footerContainer.innerHTML = zedgeFooterHTML;
        }
    }
}

if (!document.getElementById("zedge-footer-css")) {
    let cssLink = document.createElement("link");
    cssLink.id = "zedge-footer-css";
    cssLink.rel = "stylesheet";
    cssLink.href = "assets/css/footer.css";
    document.head.appendChild(cssLink);
}

injectZedgeFooterHTML();