


<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>CommentSPA</title>

		<!-- Bootstrap CSS -->
		<link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body>
		

		<div class="container" ng-app="commentSPA" ng-controller="mainCtrl">
			<div class="content">
				<div class="col-md-8 col-md-offset-2">

					<div class="page-header">
						<h2>CommentSPA</h2>
						<h4>-- simple Single Page Application featuring a <span>commenting system</span></h4>
					</div>

					<!-- New comment form -->
					<form ng-submit="submitComment()"><!-- AngularJS disable the
					default behaviour replacing it with the specified function -->
						<div class="form-group">
							<input type="hidden" name="_token" id="token" value="{!! csrf_token() !!}" ng-model="commentData.token">
							
						</div>

						

						<!-- author -->
						<div class="form-group">
							<input type="text" name="author" id="author" class="form-control input-sm" title="" placeholder="Name" ng-model="commentData.author">
						</div>

						<!-- comment -->
						<div class="form-group">
							<input type="text" name="comment" id="comment" class="form-control input-lg" placeholder="Speak to me!" ng-model="commentData.text">
						</div>

						<!-- submit -->
						<div class="form-group">
							<button type="submit" class="btn btn-primary btn-lg">Submit</button>
						</div>

					</form>

					<!-- Loading icon -->
					<p class="text-center" ng-show="loading"><span class="fa fa-meh-o fa-5x fa-spin"></span></p>

					<!-- The comments -->
					<div class="comment" ng-hide="loading" ng-repeat="comment in comments">
						<h3>Comment #{{ comment.id }} <small>by {{ comment.author }}</small></h3>
						<p>{{ comment.text }}</p>


						<!-- Delete comment -->
						<p><a href="#" ng-click="deleteComment(comment.id)" class="text-muted">Delete</a></p>
					</div>
					
				</div>
			</div>
		</div>






		<!-- jQuery -->
		<script src="bower_components/jquery/dist/jquery.js"></script>
		<!-- Bootstrap JavaScript -->
		<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		<script src="bower_components/angular/angular.js"></script>
		<script src="assets/js/controllers/mainCtrl.js"></script>
		<script src="assets/js/services/commentService.js"></script>
		<script src="assets/js/app.js"></script>

		<script>
		angular.module('commentSPA')
		.constant("CSRF_TOKEN", '{!! csrf_token() !!}');
		</script>

	</body>
</html>