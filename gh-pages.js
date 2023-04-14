import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/irshadshalu/sharetime.git',
  user: {
   name: 'Irshad P I', 
   email: 'irshadpi77@gmail.com'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);