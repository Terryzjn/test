<?php
$mysqli=new mysqli("127.0.0.1","root","root","vue_project","3306");

if (mysqli_connect_errno($mysqli)) {
    die("link fail" . mysqli_connect_error());
}
mysqli_query($mysqli,"set names utf8");

$sql = null;
$sql = "select * from user";
$result=$mysqli->query($sql);
$res=mysqli_fetch_all( $result );
$name = $_GET['username'];
$pwd = $_GET['password'];
echo $name;
?>