import LikeButton from './LikeButton';

const buttons = document.querySelectorAll('.js-like-button');
buttons.forEach((button) => new LikeButton(button));
