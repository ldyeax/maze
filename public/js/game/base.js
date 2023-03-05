$.LoadingOverlay('show', {background: 'rgba(255,255,255, 0.5)'});
gameCache.game = function (Scene, maze) {

	$.LoadingOverlay('hide');
	tinyLib.modal({

		id: 'start_game',

		title: 'Maze Game',
		dialog: 'modal-lg modal-dialog-centered',

		body: $('<center>').append(
			$('<h3>').text('Welcome to Maze!'),
		),

		footer: [
			$('<button>', { class: 'btn btn-primary' }).text('Start Game').click(async function() {
				
				$('#start_game').modal('hide');
				$.LoadingOverlay('show', {background: 'rgba(0,0,0, 0.5)'});

				await maze.loadAssets();
				maze.start($('#canvas')[0]);
				maze.instantiate(Scene);

				$.LoadingOverlay('hide');
			
				return gameCache.start(Scene, maze);

			})
		]

	});

};