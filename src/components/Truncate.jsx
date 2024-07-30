import PropTypes from 'prop-types';
const Truncate = ({text,maxLength})=>{

    if(text.length <= maxLength){
        return <span>{text}</span>;
    }
    const truncated = text.slice(0, maxLength) + '...';
    return <span dangerouslySetInnerHTML={{__html:truncated}}/>;
}

Truncate.propTypes = {
    text: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
  };

  export default Truncate;