# β STARBUCKS β 

π¬ https://s-munsoo.github.io/Starbucks-exmple/

μ€νλ²μ€ ν΄λ‘ μ½λ© νμ¬ λλ© νμ΄μ§(ννμ΄μ§)λ₯Ό λ§λλ λ°©λ²μ νμ΅.
![αα³αα³αα΅α«αα£αΊ 2022-04-12 αα©αα₯α« 2 43 47](https://user-images.githubusercontent.com/102017296/162798569-081bdeb2-5fe4-4811-aaa1-d495cfbe2d0e.png)

# μ¬μ©ν λΌμ΄λΈλ¬λ¦¬

## Reset.css

- κ° λΈλΌμ°μ μ κΈ°λ³Έ μ€νμΌμ μ΄κΈ°νν©λλ€.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css"
/>
```

## Google Fonts

- νμ΄μ§μμ μ¬μ©ν  "λλκ³ λ" ν°νΈλ₯Ό μ§μ νλ€.
  [Google Fonts](https://fonts.google.com/)μμ κ³ λ₯Έ ν°νΈ νμΌμ κ°μ Έμ΅λλ€.

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

## Google Material Icons

[κ΅¬κΈμμ μ κ³΅νλ λ¨Έν°λ¦¬μΌ μμ΄μ½](https://material.io/resources/icons/?style=baseline)

[Getting started for web](https://material.io/develop/web/getting-started)

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

## Swiper

[Swiper](https://swiperjs.com/)λ νλμ¨μ΄ κ°μ μ νκ³Ό μ¬λ¬ κΈ°λ³Έ λμμ κ°μΆ μ¬λΌμ΄λ λΌμ΄λΈλ¬λ¦¬ κΈ°μ .

[Getting Started With Swiper](https://swiperjs.com/get-started)

```html
<!-- SWIPER -->
<link
  rel="stylesheet"
  href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
/>

<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
```

## Youtube API

[IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

## ScrollMagic

[ScrollMagic](https://github.com/janpaepke/ScrollMagic)μ μ€ν¬λ‘€κ³Ό μμμ μνΈ μμ©μ μν μλ°μ€ν¬λ¦½νΈ λΌμ΄λΈλ¬λ¦¬

[ScrollMagic API](http://scrollmagic.io/docs/)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```

## GSAP & ScrollToPlugin

[GSAP(The GreenSock Animation Platform)](https://greensock.com/gsap/)μ μλ°μ€ν¬λ¦½νΈλ‘ μ μ΄νλ νμλΌμΈ κΈ°λ°μ μ λλ©μ΄μ λΌμ΄λΈλ¬λ¦¬
[ScrollToPlugin](https://greensock.com/scrolltoplugin/)μ μ€ν¬λ‘€ μ λλ©μ΄μμ μ§μνλ GSAP νλ¬κ·ΈμΈ

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
  integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ=="
  crossorigin="anonymous"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js"
  integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q=="
  crossorigin="anonymous"
></script>
```

## μ€ν κ·Έλν

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta
  property="og:description"
  content="μ€νλ²μ€λ μΈκ³μμ κ°μ₯ ν° λ€κ΅­μ  μ»€νΌ μ λ¬Έμ μΌλ‘, 64κ°κ΅­μμ μ΄ 23,187κ°μ λ§€μ μ μ΄μνκ³  μμ΅λλ€."
/>
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```

- og:type`: νμ΄μ§μ μ ν(E.g, `website`, `video.movie`)
- og:site_name`: μν μ¬μ΄νΈμ μ΄λ¦
- og:title`: νμ΄μ§μ μ΄λ¦(μ λͺ©)
- og:description`: νμ΄μ§μ κ°λ¨ν μ€λͺ
- og:image`: νμ΄μ§μ λν μ΄λ―Έμ§ μ£Όμ(URL)
- og:url`: νμ΄μ§ μ£Όμ(URL)

# μ¬μ©ν κΈ°μ  μ€ν

- HTML
- CSS
- JavaScript
