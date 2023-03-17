import css from './Paper.module.css';

const Paper = ({ children, styles, ...otherProps }) => {
  return (
    <div className={`${css.paper} ${styles}`} {...otherProps}>
      {children}
    </div>
  );
};
export default Paper;
