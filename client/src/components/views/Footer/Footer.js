import { SmileOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <div style={{
      height: '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1rem',
      backgroundColor: '#001529',
      color: '#FFF',
      marginTop: '20px',
    }}>
      <div> HIMEDIA <SmileOutlined /></div>
    </div>
  );
}

export default Footer;