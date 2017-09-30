---
layout: post
title:  "Primeiro post com o Jekyll!"
date:   2017-09-30 15:00:00 -0300
categories: jekyll
---

Primeiro post com o [Jenkyll](https://jekyllrb.com/) e [GitHub Pages](https://pages.github.com/).

## Teste de Sintaxe PHP
{% highlight php %}
<?php
    $testes = [
        "Teste 1",
        true,
        15
    ];
    foreach ($testes as $teste) {
        echo $teste;
    }
    die();
{% endhighlight %}

## Teste de Sintaxe Javascript
{% highlight javascript %}
let minhaVariavel = [1, 2, 3];

minhaVariavel.forEach((elemento) => console.log(elemento))
{% endhighlight %}

## Teste de Sintaxe Shell
{% highlight sh %}
#!/bin/bash

for i in $(ls -1); do
  echo $i
done

exit 0
{% endhighlight %}
