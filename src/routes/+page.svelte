<script>
  // No JS needed for this simple page
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #1e1f28, #2e2f3e);
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    background: linear-gradient(90deg, #ff6ec4, #7873f5, #42e695);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: transform 0.3s ease, filter 0.3s ease;
    cursor: pointer;
  }

  h1:hover {
    transform: scale(1.1) rotate(-2deg);
    filter: drop-shadow(0 0 10px #ff6ec4) drop-shadow(0 0 10px #42e695);
  }
</style>

<main>
  <h1>Vad blir det för mat?</h1>
</main>
