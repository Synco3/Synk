module.exports = {
    run: async (client, error, action, info) => {
      let errorc = client.channels.get("592099237689557005");
      errorc.send(`\n\n\n<-> ERROR REPORT <->\n\n\nAction: ${action}\nInfo:\n${info}\nError: ${error.substring(0, 1024)}\n<-> EXTRA INFORMATION <->\n`);
  }
}