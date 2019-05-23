import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Card, CardHeader, Icon, CardActionArea, CardContent, CardActions, CardMedia } from "@material-ui/core";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      hubConnection: null
    };
  }
  componentDidMount() {
    const signalR = require("@aspnet/signalr");
    const hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5000/websocket", {
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    this.setState({ hubConnection }, () => {
      this.state.hubConnection
        .start()
        .then(() => console.log("Connection started!"))
        .catch(err => console.log("Error while establishing connection :("));
      this.state.hubConnection.on("all", receivedMessage => {
        const messages = this.state.messages.concat([receivedMessage]);
        this.setState({ messages });
      });
    });
  }

  render() {
    const { messages } = this.state;
    return (
            <Grid
              container
              justify="space-around"
              direction="row"
            >
              <Grid sm={3} style={{marginTop:300}}>
              sjadgsakjhdakjshdkjáhdkj
                
              </Grid>
            </Grid>
        
    );
  }
}
export default Home;
