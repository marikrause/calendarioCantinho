<?php
    switch ($_GET['page']) {
        case 'calendar':
            include './pages/calendar.html';
            break;
        case 'users':
            include './pages/users.html';
            break;
        default:
            include './pages/calendar.html';
            break;
    }
?>