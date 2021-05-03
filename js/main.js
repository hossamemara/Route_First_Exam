function changeBg()
{
    
    document.getElementById('mynav').style.backgroundColor='#343A40';
    
}



var myColors=['#f0e4d7','#f5c0c0','#ff7171','#9fd8df','#206a5d','#81b214','#ffcc29','#f5f7b2','#1cc5dc','#cf0000','#890596']

for (var i=0;i<myColors.length;i++)
{
    $('.colors').eq(i).css('backgroundColor',myColors[i])
}

/* _____________ Color Mode Start _____________ */
$('.colors').click(function()
{
    var mode=$(this).css('backgroundColor')
    console.log(mode);
    $('.mode-change').css('color',mode)
})

var modeOptionsWidth=$('.color-options').outerWidth();

    $('.mode-options').css({'right':-modeOptionsWidth})

$('.mode-sider').click(function()
{

    if($('.mode-options').css('right')=='0px')
    {
        $('.mode-options').animate({'right':-modeOptionsWidth},500)
    }
    else
    {
        $('.mode-options').animate({'right':'0px'},500)
    }
    
})





