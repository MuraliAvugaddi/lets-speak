const page = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Coming Soon</h1>
        <div style={styles.loader}></div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  content: {
    textAlign: "center" as const,
  },
  heading: {
    fontSize: "3rem",
    color: "#fff",
    marginBottom: "2rem",
    animation: "fadeInScale 0.8s ease-in-out",
  },
  loader: {
    width: "50px",
    height: "50px",
    border: "4px solid rgba(255,255,255,0.3)",
    borderTop: "4px solid #fff",
    borderRadius: "50%",
    margin: "0 auto",
    animation: "spin 1s linear infinite",
  },
};

export default page;
