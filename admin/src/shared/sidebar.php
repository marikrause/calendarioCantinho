<?php $page = isset($_GET['page']) ? $_GET['page'] : '' ?>
<nav class="col-md-2 d-none d-md-block bg-light sidebar">
  <div class="sidebar-sticky">
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link <?php echo ($page == 'calendar' || $page == '') ? 'active' : '' ?>"
          href="/calendarioCantinho/src/index.php?page=calendar">
          <span data-feather="home"></span> Calendario <span class="sr-only"></span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link <?php echo $page == 'users' ? 'active' : '' ?>"
          href="/calendarioCantinho/src/index.php?page=users">
          <span data-feather="file"></span> Usuários
        </a>
      </li>
    </ul>
  </div>
</nav>