import classNames from 'classnames';
import styles from './ScrollDownArrow.module.css';

const ScrollDownArrow = ({ className }) => (
  <div className={classNames(styles.button, styles.demo, className)}>
    <div>
      <span />
    </div>
  </div>
);

export default ScrollDownArrow;
