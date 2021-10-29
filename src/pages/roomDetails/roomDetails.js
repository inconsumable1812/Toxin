import './roomDetails.scss'
import '../../components/header/header'
import '../../components/chart/chart'
import { LikeButton } from '../../components/likeButton/likeButton'
import '../../components/bookingForm/bookingForm'

const LikeButtons = document.querySelectorAll('.js-likeButton')
LikeButtons.forEach((button) => new LikeButton(button))
