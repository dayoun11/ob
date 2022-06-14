//팝업창 띄우기 함수생성
function openPopup(){

  $("#popup").fadeIn(function(){ //검정배경 나타남
    $("#popup .body").css("display","block"); //팝업창 내용 보여짐
  });
}

$(document).ready(function () {

  //pop
  $(".btn_close .r_pop").click(function(){ //close 눌렀을때
    $("#popup").hide(); //popup 안보이게함
  })
  

    //탑 메뉴
    $(".menu_toggle_btn").click(function () {
        $(this).toggleClass("menu-open");
        $(".header-menu").slideToggle("fast");
    });

    /* 비주얼 */
    let img = $(".mainvisual ul li");
    let btn = $(".mainvisual .btn>span");
    let oldidx = 0; //기본이미지
    let idx = 0; //새로 바뀌는 이미지
    let img_n = img.length; //1,2,3...개수를 세어서 변수에 저장한다.

    //이미지와 버튼이 바뀌는 함수
    function changeImg(idx) { //매개변수가 있는 함수 --> idx는 선택되는 이미지}

        if (oldidx != idx) { //기존의 이미지와 선택된 이미지가 다를때...

            btn.eq(oldidx).removeClass("active"); //기존 하단버튼 비활성화 -> active 클래스를 삭제함

            btn.eq(idx).addClass("active"); //선택된 하단버튼 화렁화 -> active 클래스를 불러냄

            img.eq(oldidx).stop(true, true).fadeOut(300); //기존 이미지 사라짐

            img.eq(idx).stop(true, true).fadeIn(300); //선택된 이미지 나타남

        }

        oldidx = idx; //선택된 이미지는 다시 기존 이미지로 저장되어서 Fade Out...
    }

    //자동함수 생성
    function changeAuto() {
        idx++;

        //선택한 이미지가 마지막일 때 다시 처음 이미지부터 시작
        if (idx > img_n - 1) { //index는 0부터 시작하고 length는 1부터 시작하므로 1을 빼주어야 마지막 숫자가 맞음
            idx = 0;

        }

        changeImg(idx);

    }

    timer = setInterval(changeAuto, 5000); //4초 간격으로 함수를 자동재생


    //하단버튼 클릭시.....
    btn.click(function () {

        clearInterval(timer); //버튼 클릭시 자동함수 해지 -> clearInterval(변수);
        $(".play").hide();
        $(".stop").show();

        idx = $(this).index(); //0,1,2...
        changeImg(idx);

        timer = setInterval(changeAuto, 4000); //버튼을 클릭안할떄는 다시 함수 자동재생
    });


    /*메인메뉴 */
    //자동으로 슬라이드 함수생성
  function bannerAuto(){

    $(".ban ul").stop().animate({marginLeft:"-=270px"},1000,function(){
      $(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨뒤로 이동
      $(this).css({marginLeft:"0px"}); //최종목적지
    });

  }
  bauto=setInterval(bannerAuto,4000);


  	//다음보기
    $(".ban_btn .ban_right").click(function(){

      clearInterval(bauto);

      $(".ban ul").stop().animate({marginLeft:"-=270px"},1000,function(){
        $(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨뒤로 이동
        $(this).css({marginLeft:"0px"}); //최종목적지
      });
  
      bauto=setInterval(bannerAuto,4000);

    });
  
    //이전보기
    $(".ban_btn .ban_left").click(function(){

      clearInterval(bauto);
  
      $(".ban ul").stop().animate({marginLeft:"+=270px"},1000,function(){
        $(".ban ul li:last-child").appendTo(".ban ul"); //첫번째 이미지 맨뒤로 이동
        $(this).css({marginLeft:"0px"}); //최종목적지
      });

      bauto=setInterval(bannerAuto,4000);
  
    });

    //마우스를 올리면 슬라이드 자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행...
    $(".ban").hover(function(){
      clearInterval(bauto);
    },function(){
      bauto=setInterval(bannerAuto,4000);
    });


    
    // 서브메뉴...
    $(".menu>li").hover(function(){
        $(this).find(">ul").stop().slideDown();
      },function(){
        $(this).find(">ul").stop().slideUp();
      });

    //서브 비주얼
    $(".subtop1").fadeIn(1500);
    $(".subtop2").fadeIn(1500);
    $(".subtop3").fadeIn(1500);
    $(".subtop4").fadeIn(1500);
    $(".subtop5").fadeIn(1500);


    //서브1-1
    $(".tab li").click(function(){

        thval=$(this).index();
        thnum=+80*thval; //세로 70px씩 증가됨
      
        $(".tab-header .tab-highlight").animate({top:thnum});
        $(".tab li a").css("color","#000"); //탬의 모든 글자색
        $(this).find(">a").css("color","#fff"); //선택된  탭의 글자색
      
        $(".panel>li").hide(); //기존의 보여진 내용 숨기기
        $($(this).find(">a").attr("href")).fadeIn(); //새로 선택된 내용 href 연결된내용 보여주기
      
    });

    
    
    //서브3-2
    $("dd:not(:first)").css("display","none");
    // 첫번째 dd를 제외하고 나머지는 보이지 않게 할 경우
    $("dt:first").addClass("selected");
    //첫번째 dd는 선택된상태의 클래스 불러옴
        
    $("dl dt").click(function(){

        $("dl dt").find("+dd").stop().hide("slow"); //기존에 보이는것은 다른것을 선택할때 올라가게
        $(this).find("+dd").stop().show("slow");
        $("dt").removeClass("selected"); //기존선택된 탭메뉴 제거
        $(this).addClass("selected"); //새로 선택된 탭메뉴 추가
        
    });
    

    //서브5-2
    $(".ctab li").click(function(){

        tval=$(this).index();
        tnum=+500*tval; //가로폭 120px씩 증가됨
      
        $(".ctab-header .ctab-highlight").animate({left:tnum});
        $(".ctab li a").css("color","#000"); //탬의 모든 글자색
        $(this).find(">a").css("color","#fff"); //선택된  탭의 글자색
      
        $(".cpanel li").hide(); //기존의 보여진 내용 숨기기
        $($(this).find(">a").attr("href")).fadeIn(); //새로 선택된 내용 href 연결된내용 보여주기
      
    });



});