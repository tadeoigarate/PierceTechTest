/* eslint-disable react/prop-types */
export const TopFooterCard = ({
  icon,
  title,
  subTitle,
  footerCardConteinerClass,
  textConteiner,
  titleTopFooter,
  subTitleTopFooter,
}) => {
  return (
    <div className={footerCardConteinerClass}>
      <img src={icon} alt="Icon" />
      <div className={textConteiner}>
        <h1 className={titleTopFooter}>{title}</h1>
        <p className={subTitleTopFooter}>{subTitle}</p>
      </div>
    </div>
  );
};
