/* eslint-disable react/prop-types */
export const CategoryHeader = ({
  titleStyle,
  title,
  icon,
  iconStyle,
  conteinerClassName,
}) => {
  return (
    <div className={conteinerClassName}>
      <a href="#" style={titleStyle} className="headerCategoryTitle">
        {title}
      </a>
      {icon && <img style={iconStyle} src={icon} alt="Icon" />}
    </div>
  );
};
