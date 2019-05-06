import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";
export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container style={{marginTop:100}}>
        <Content>
          <Card>
            <CardItem header>
              <Text style={{color:'red'}}> NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={()=>this.props.navigation.navigate('Camera')}>Home</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
