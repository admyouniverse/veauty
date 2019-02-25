<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Webpixels">
    <title> @yield('titulo', 'Página Inícial') :: Veauty</title>

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('images/icones/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/icones/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/icones/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('images/icones/site.webmanifest') }}">
    <link rel="mask-icon" href="{{ asset('images/icones/safari-pinned-tab.svg') }}" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800">


    <!-- Font Awesome 5 -->
    <link rel="stylesheet" href="{{ asset('plugins/fontawesome/css/all.min.css')}}">

    <!-- Toastr -->
    <link rel="stylesheet" type="text/css" href="{{ asset('plugins/toastr/toastr.min.css') }}">

    <!-- Theme CSS -->
    <link type="text/css" href="{{ asset('css/portal.css')}}" rel="stylesheet">
</head>

<body class="bg-secondary">
    <header class="header-transparent" id="header-main">
        <!-- Search -->
        <div id="search-main" class="navbar-search">
            <div class="container">
                <!-- Search form -->
                <form class="navbar-search-form" role="form">
                    <div class="form-group">
                        <div class="input-group input-group-transparent">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-search"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Digite e aperte enter...">
                        </div>
                    </div>
                </form>
                <div class="navbar-search-suggestions">
                    <h6>Sugestões de pesquisa</h6>
                    <div class="row">
                        <div class="col-sm-6">
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a class="list-link" href="#">
                                        <i class="fas fa-search"></i>
                                        <span>Salão Ademia</span> em salões
                                    </a>
                                </li>
                                <li>
                                    <a class="list-link" href="#">
                                        <i class="fas fa-search"></i>
                                        <span>Salão Caxias</span> in salões
                                    </a>
                                </li>
                                <li>
                                    <a class="list-link" href="#">
                                        <i class="fas fa-search"></i>
                                        <span>Corte</span> em serviços
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {{--  <!-- Topbar -->
        <div id="navbar-top-main" class="navbar-top  navbar-light bg-white border-bottom">
            <div class="container">
                <div class="navbar-nav align-items-center">
                    <div class="d-none d-lg-inline-block">
                        <span class="navbar-text mr-3">Purpose - Website UI Kit</span>
                    </div>
                    <div>
                        <ul class="nav">
                            <li class="nav-item dropdown ml-lg-2 dropdown-animate" data-toggle="hover">
                                <a class="nav-link px-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img alt="Image placeholder" src="../assets/img/icons/flags/us.svg">
                                    <span class="d-none d-lg-inline-block">United States</span>
                                    <span class="d-lg-none">EN</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-arrow">
                                    <a href="" class="dropdown-item">
                                        <img alt="Image placeholder" src="../assets/img/icons/flags/es.svg">Spanish</a>
                                    <a href="" class="dropdown-item">
                                        <img alt="Image placeholder" src="../assets/img/icons/flags/ro.svg">Romanian</a>
                                    <a href="" class="dropdown-item">
                                        <img alt="Image placeholder" src="../assets/img/icons/flags/gr.svg">Greek</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="ml-auto">
                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link" href="../pages/support.html">Support</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link" data-action="search-open" data-target="#search-main"><i class="fas fa-search"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../pages/shop-cart.html"><i class="fas fa-shopping-cart"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../pages/login.html"><i class="fas fa-user-circle"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> --}}
        <!-- Main navbar -->
        <nav class="navbar navbar-main navbar-expand-lg navbar-sticky navbar-transparent navbar-light bg-white" id="navbar-main">
            <div class="container">
                <a class="navbar-brand mr-lg-5" href="{{ route('home') }}">
                    <img alt="Image placeholder" src="{{ asset('images/logo/230.png') }}" style="height: 40px;">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar-main-collapse">
                    <ul class="navbar-nav align-items-lg-center">
                        <li class="nav-item ">
                            <a class="nav-link" href="{{ route('home') }}">Início</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="{{ route('home') }}">Sobre</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="{{ route('home') }}">Para Você</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="{{ route('home') }}">Para Empresas</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-action="search-open" data-target="#search-main"><i class="fas fa-search"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/shop-cart.html"><i class="fas fa-shopping-cart"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/login.html"><i class="fas fa-user-circle"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main id="app">

        <criar-mapa-componente :salaodb="{{$salao}}" :cidadedb="{{$cidade}}"></criar-mapa-componente>

        <listar-salao-componente></listar-salao-componente>

        <section class="slice slice-lg bg-noise bg-cover bg-size--cover" style="background-image: url({{ asset('images/bg/mulher.jpg') }}); background-position: center bottom;">
            <div class="mask bg-dark opacity-3"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card bg-dark py-5 px-4 shadow-lg">
                            <div class="card-body">
                                <h2 class="heading h2 text-white"><strong>Veauty</strong> é um benefício para seus funcionários.</h2>
                                <p class="lead lh-180 text-white mt-4">Ofereça o Veauty como um benefício para seus funcionários e mostre para eles o quanto você se importa com o seu bem-estar. </p>
                                <div class="btn-container mt-5">
                                    <a href="#" class="btn btn-lg btn-primary px-5">Plano Empresarial</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       {{--  <section class="slice slice-lg">
            <div class="container">
                <div class="mb-md text-center">
                    <h3 class="heading h3">Find your motivation</h3>
                    <div class="fluid-paragraph text-center mt-4">
                        <p class="lead lh-180">You get all Bootstrap components fully customized. Besides, you receive another numerous plugins out of the box and ready to use.</p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="position-relative">
                            <img alt="Image placeholder" src="../assets/img/prv/img-3-1000x900.jpg" class="img-center img-fluid rounded shadow">
                            <a href="https://www.youtube.com/watch?v=mqpwDJpI3Rc" class="btn btn-white btn-icon-only btn-zoom--hover rounded-circle position-absolute right-4 top-4" data-fancybox>
                                <span class="btn-inner--icon"><i class="fas fa-play"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section> --}}
        <section class="slice slice-lg bg-secondary">
            <div class="container">
                <div class="mb-md text-center">
                    <h3 class="heading h3">Por que ser Veauty?</h3>
                    <div class="fluid-paragraph text-center mt-4">
                        <p class="lead lh-180">Nós oferecemos mais do que facilidades na hora de contratar um serviço. Nos oferecemos um estilo de consumir.</p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="row row-grid">
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="py-4 text-center">
                                        <span class="display-3 text-primary">1.</span>
                                    </div>
                                    <div class="px-4 pb-5 text-center">
                                        <h5 class="h4">Motivo 1</h5>
                                        <p class="mt-2">Este é um texto que será escrito pelo Pedro e será incluido aqui para explicar os motivos de ser Veauty.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="py-4 text-center">
                                        <span class="display-3 text-primary">2.</span>
                                    </div>
                                    <div class="px-4 pb-5 text-center">
                                        <h5 class="h4">Motivo 2</h5>
                                        <p class="mt-2">Este é um texto que será escrito pelo Pedro e será incluido aqui para explicar os motivos de ser Veauty.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row row-grid">
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="py-4 text-center">
                                        <span class="display-3 text-primary">3.</span>
                                    </div>
                                    <div class="px-4 pb-5 text-center">
                                        <h5 class="h4">Motivo 3</h5>
                                        <p class="mt-2">Este é um texto que será escrito pelo Pedro e será incluido aqui para explicar os motivos de ser Veauty.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="py-4 text-center">
                                        <span class="display-3 text-primary">4.</span>
                                    </div>
                                    <div class="px-4 pb-5 text-center">
                                        <h5 class="h4">Motivo 4</h5>
                                        <p class="mt-2">Este é um texto que será escrito pelo Pedro e será incluido aqui para explicar os motivos de ser Veauty.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Call to action -->
        <section class="slice slice-lg">
            <span class="tongue tongue-top"><i class="fas fa-angle-up"></i></span>
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-8 text-center">
                        <h3 class="font-weight-400">Eu quero ser <span class="font-weight-700">VeautyClub</span> agora!</h3>
                        <div class="mt-5">
                            <a href="" target="_blank" class="btn btn-primary btn-circle btn-translate--hover px-4">Assinar<span class="badge badge-pill badge-danger text-sm">R$5,00</span></a>
                            <a href="" class="btn btn-link">Dúvidas?</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="footer footer-dark bg-gradient-primary">
        <div class="container">
            <div class="row pt-md">
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <a href="../index.html">
                        <img src="{{ asset('images/logo/320.png') }}" alt="Footer logo" style="height: 70px;">
                    </a>
                    <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                    <h6 class="heading mb-3">Conta</h6>
                    <ul class="list-unstyled">
                        <li><a href="#">Perfil</a>
                        </li>
                        <li><a href="#">Configurações</a>
                        </li>
                        <li><a href="#">Pagamento</a>
                        </li>
                        <li><a href="#">Notificações</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                    <h6 class="heading mb-3">Sobre</h6>
                    <ul class="list-unstyled text-small">
                        <li><a href="#">Serviços</a>
                        </li>
                        <li><a href="#">Contatos</a>
                        </li>
                        <li><a href="#">Sócios</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-sm-4 mb-5 mb-lg-0">
                    <h6 class="heading mb-3">Faça parte</h6>
                    <ul class="list-unstyled">
                        <li><a href="#">Usuário</a>
                        </li>
                        <li><a href="#">Salão</a>
                        </li>
                        <li><a href="#">Empresas</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row align-items-center justify-content-md-between py-4 mt-4 delimiter-top">
                <div class="col-md-6">
                    <div class="copyright text-sm font-weight-bold text-center text-md-left">
                        &copy; 2019 <a href="https://youniverseweb.com" class="font-weight-bold" target="_blank">Younivers</a>. Todos os direitos reservados.
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                        <li class="nav-item">
                            <a class="nav-link" target="_blank">
                                <i class="fab fa-apple"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank">
                                <i class="fab fa-android"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="https://instagram.com/veautyapp" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://twitter.com/veautyapp" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://facebook.com/veautyapp" target="_blank">
                                <i class="fab fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <!-- Core -->
    <script src="{{ asset('plugins/jquery/jquery-3.2.1.min.js')}}"></script>
    <script src="{{ asset('plugins/bootstrap/dist/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{ asset('plugins/in-view/dist/in-view.min.js') }}"></script>
    <!-- Theme JS -->
    <script src="{{ asset('js/portal.js')}}"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByWD1uKbBef8Q3LhJRBHXHIiHtKitZPvQ"></script>
    <script src="{{ asset('plugins/toastr/toastr.min.js') }}" type="text/javascript" charset="utf-8" async defer></script>
    <script src="{{ asset('js/app.js') }}?{{time()}}"></script>
    <script>
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#app").toggleClass("toggled");
        });

    </script>
</body>

</html>
