angular.module('workout-app').controller("MainController", function(){
    var vm = this;
    vm.title = 'Generative workout';

    vm.workouts = [
      {
        name: 'workout 001',
        total_duration: 45,
  	    global_intensity: 7,
        number_of_steps: 5,
        total_calories: 230,
  	    workout_type: 'type',
  	    body_parts: ['legs', 'back']
      },
      {
        name: 'workout 002',
        total_duration: 60,
  	    global_intensity: 9,
        number_of_steps: 5,
        total_calories: 230,
  	    workout_type: 'type',
  	    body_parts: ['legs', 'back']
      }
    ];
    vm.exercices = [
      {
        name: 'squat',
        reps: 10,
	      duration: 10,
	      intensity: 7,
	      type: 'type',
        body_parts: ['legs'],
	      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida libero turpis, nec mattis odio imperdiet at. Maecenas venenatis tincidunt lacinia. Phasellus finibus augue metus, vel lobortis dui rutrum vitae.',
	      schema: 'test',
        calories_per_time: 30
      },
      {
        name: 'push up',
        reps: 15,
	      duration: 5,
	      intensity: 8,
	      type: 'type',
        body_parts: ['arms'],
	      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida libero turpis, nec mattis odio imperdiet at. Maecenas venenatis tincidunt lacinia. Phasellus finibus augue metus, vel lobortis dui rutrum vitae.',
	      schema: 'test',
        calories_per_time: 40
      },
      {
        name: 'something',
        reps: 200,
	      duration: 20,
	      intensity: 8,
	      type: 'type',
        body_parts: ['arms'],
	      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida libero turpis, nec mattis odio imperdiet at. Maecenas venenatis tincidunt lacinia. Phasellus finibus augue metus, vel lobortis dui rutrum vitae.',
	      schema: 'test',
        calories_per_time: 200
      }
    ];
});
