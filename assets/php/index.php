<?php
include('conexao.php');
$result = mysqli_query($conn, "SELECT * FROM noticias");
while($row = mysqli_fetch_assoc($result)) {
  echo "<div class='swiper-slide tranding-slide'>
          <div class='act-img'>
            <img src='assets/img/{$row['imagem']}' alt='Tranding'>
          </div>
          <div class='noticia'>
            <img class='act-tag' src='assets/img/{$row['icone']}' alt=''>
            <div class='especificacoes'>
              <h2 class='acontecimento'>{$row['titulo']}</h2>
              <h3 class='localizacao'><span>{$row['localizacao']}</span></h3>
            </div>
          </div>
        </div>";
}
?>