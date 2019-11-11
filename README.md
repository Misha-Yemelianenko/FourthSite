навбар - 

<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>






Как создавать слайдер -

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a643ab357%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a643ab357%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22221.3671875%22%20y%3D%22217.7%22%3E%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9%20%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Первый слайд">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a643ab358%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a643ab358%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22230.2265625%22%20y%3D%22217.7%22%3E%D0%92%D1%82%D0%BE%D1%80%D0%BE%D0%B9%20%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Второй слайд">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a643ab359%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a643ab359%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22232.8515625%22%20y%3D%22217.7%22%3E%D0%A2%D1%80%D0%B5%D1%82%D0%B8%D0%B9%20%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Третий слайд">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    



КАРТЫ - 

(ОБЫЧНАЯ)
<div class="card">
  <div class="card-body">
    This is some text within a card body.     
  </div>
</div>


(С КАРТИНКОЙ)
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">                                        
    <p class="card-text">Some quick example text to build on the 
card title and make up the bulk of the card's content.</p>
  </div>
</div>










collaps - (скрывает элемент) , (надо задать айди колаппсу что б предать его кнопки , тогда она заработает)

<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Ссылка с href
  </a>
</p>

<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>









выпадающие кнопки - (можно сделать выпадение в любую сторону) (удалить dropdown-toggle для того что б убрать стрелку)
также можно сделать заголовок - <div class="dropdown-header">...</div> 




<div class="drop(down)(left)(right)(up)">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Кнопка выпадающего списка
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>

<div class="dropdown-divider">Аналог HR</div> 


    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>









счетчик чего-то , тип как у корзины алика -

<span class="badge badge-primary badge-pill">.....</span>





Модальное окно -

https://bootstrap-4.ru/docs/4.0/components/modal/















.container - контейнер 
.row - cтрока 
.fluid - на всю ширину 
.col-xl,lg,md,sm col-auto(занимает место для контента)     - колонки (1-12шт)
.w-100   (делит строки на попалам или делает элемент на 100% width)
.align-itms-start,center,end ( позиционирование блоков по вертикале контейнера )
.align-self-start,center,end(для блока в контейнере по вертикале)
.justify-contant-start,center,end,around,between (позиционирование по горизонтале контейнера)
.no-gutters (marign:0; padding:0;)
.position-absolute,relative,static,fixed,sticky (знакомый позишн)
.bg-*color* - background 
.display-1,2,3,4 - толщина шрифта 
.list-unstyled (выключает стили для списка)
.list-inline (список в строку) надо дать всем элементам .list-inline-item
.rounded (закругление краев блока)
.float-right,left (обычный флоат ) если по центру то .mx-auto.d-block
.badge .badge-*color*  - прикольный текст в бекграунде для заглавлений или кнопок
.badge-pill делает круглый 
.order-# : какой по очереди блок 
.disabled что б отключить что-то 


.table .table-*color* - красивая таблица 
.table-stiped (зебра) 
.table-bordred 
.table-hover (подсвечивание наведение)






.mr,ml mr-auto (mrarign-right ; marign-left;) 
.m - для классов, набор margin
.p - для классов, набор padding 
.t - для классов, набор margin-top или padding-top 
.b - для классов, набор margin-bottom или padding-bottom 
.l - для классов, набор margin-left или padding-left 
.r - для классов, набор margin-right или padding-right 
.x - для классов, которые выделяют оба *-left и *-right 
.y - для классов, которые выделяют оба *-top и *-bottom 
.a - для классов, комплект margin или padding на все 4 стороны элемента 




mx-auto - центрирование дочерного элемената по центру блока 





.text-muted - серый 
.text-primary- синий 
.text-success-зеленый	 
.text-info-голубой 
.text-warning-оранжевый 
.text-danger-розовый 
.text-inverse - инверсия 
.text-center,left,right - позиционирование текста





.alert .alert-*color* - для оповищений (дописать role="alert")
.alert-heading - назвине оповещения




Как создать кнопку виключения -
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true" data-dismiss="alert">&times;</span>
</button>




Создание навбара - 
nav.breadcrumb
a.breadcrumb-item activ




Кнопки - 
.btn .btn-*color* - кноки разных цветов 
.btn .btn-outline-*color* - кнопки с пустотой в нутри и ховером 
.btn-group-vertical  - делает кнопки вертикально 

Чекбоксы и радио - 
btn.btn-group data-toggle="buttons"
<lable>
   <input .btn .btn-*color* .active>
    </lable>
<lable>
   <input .btn .btn-*color* .active>
    </lable>
<lable>
   <input .btn .btn-*color* .active>
    </lable>



<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span></button>
для создания навбара 



для создания выпадающего списка 
		<div class="collapse navbar-collapse">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
