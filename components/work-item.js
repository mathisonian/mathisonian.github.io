
const WorkItem = ({ title, image, subtitle, children }) => {
  return (
    <div className="item">
      <div className="item-header">
      {
       title ? title : null
      }
      {
       subtitle ? <div className="subtitle">{subtitle}</div> : null
      }
      </div>
      {
        image ? (
          <div className="item-image" style={{backgroundImage: `url(/static/img/${image})`}} />
        ) : null
      }

      <div className="item-details">
        {children}
      </div>

      <style jsx>{`
        .item-header {
          font-family: Helvetica, Arial, sans-serif;
          font-weight: bold;
          font-size: 14px;
          // line-height: 20px;
        }

        .item-header .subtitle {
          padding-top: 5px;
          font-weight: normal;
          font-style: italic;
        }

        .item-details {
          font-family: 'Lora', serif;
          font-size: 14px;
          line-height: 18px;
          margin-top: ${title ? '14px' : '0'};
        }

        .item-image {
          height: 200px;
          width: 100%;
          margin-top: 14px;
          background-size: contain;
          background-position: center center;
          background-repeat: no-repeat;
        }

        .item {
          margin-bottom: 56px;
        }

        a, a:visited {
          color: #000;
        }
        a:hover {
        }
        li {
          margin-bottom: 20px;
          line-height: 14px;
        }
        ul {
          list-style-type: none;
          margin-bottom: 30px;
        }
      `}
      </style>
    </div>
  )
}

export default WorkItem