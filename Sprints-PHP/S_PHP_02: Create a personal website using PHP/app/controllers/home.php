<?php
require_once('../app/models/UserModel.php');

class MainPageController {
    public function index() {
        $user = new UserModel("John Doe");
        require_once('../app/views/home.php');
    }
}
?>
