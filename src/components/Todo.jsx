export const Todo = ({ title, description }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "15px 20px",
          margin: "10px 0",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
          fontFamily: "'Arial', sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "1.2rem",
            margin: "0 0 5px 0",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "1rem",
            margin: "0",
            color: "#555",
          }}
        >
          {description}
        </p>
      </div>
    );
  };
  