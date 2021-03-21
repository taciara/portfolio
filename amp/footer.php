	<div id="contact" class="center">
		<figure class="ampstart-image-fullpage-hero m0 relative">
			
			<amp-img width="404" height="530" alt="" layout="responsive" src="https://www.taciara.com.br/assets/images/background-header.jpg" media="(max-width: 415px)" class=""  style="min-height: 530px;filter: brightness(0.5);"></amp-img>
			
			<amp-img height="530" alt="" layout="fixed-height" src="https://www.taciara.com.br/assets/images/background-header.jpg" media="(min-width: 416px)" class=""  style="filter: brightness(0.5);height: 530px; min-height: 530px;"></amp-img>
			
			<figcaption class="absolute top-0 right-0 bottom-0 left-0">
				<div class="p3">
					<h2 class="ampstart-fullpage-hero-heading mb1">
						<span class="ampstart-fullpage-hero-heading-text">
							<span class="h1 block bold caps my1">Fale Conosco</span>
						</span>
					</h2>
				</div>
				<div class="">
					<form method="post" action-xhr="<?php echo "sent.php";?>" target="_top">
						<div class="form-row">
							<div class="col12 form-group">
								<input type="text" name="nome" placeholder="Nome Completo"  class="" required>
							</div>
							 <div class="col12 form-group">
								<input type="email" name="email" placeholder="E-mail" class="" required>
							</div>
							 <div class="col12 form-group">
								<input type="tel" name="telefone" placeholder="Telefone / Whatsapp"  class="" required>
							</div>
							 <div class="col12 form-group">
								<textarea name="mensagem" placeholder="Mensagem" class="" ></textarea>
							</div>
							 <div class="col12 form-group">
								<input type="submit" class="botao-form" name="enviar" value="ENVIAR">
							</div>
						</div>
						<div submit-success>
						  <template type="amp-mustache">
							<h2 style="color: #fff;">Obrigado! Mensagem enviada com <strong>SUCESSO!</strong></h2>
						  </template>
						</div>
						<div submit-error>
						  <template type="amp-mustache">
							<h2 style="color: #fff;">ERRO ao enviar a mensagem.</h2>
						  </template>
						</div>
					</form>
				</div>
			</figcaption>
		</figure>
	</div>

	<footer style="background-color: #000; text-align: center; padding: 10px;">
		<p style="color: #fff; text-align: center;">© 2007/2020 Taciara Furtado - Todos os direitos reservados</p>
		<a href="https://taciara.com/.br" target="_blank">Desenvolvimento Inteligente</a>
	</footer>
	
</body>
</html>