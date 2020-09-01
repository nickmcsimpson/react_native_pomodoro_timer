import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  count: {fontSize: 72},
})

const howManySeconds = (total) => {
  return String(total % 60).padStart(2,'0')
}

const howManyMinutes = (total) => {
  return Math.floor(total/60)
}

class Count extends React.Component {
  static propTypes = {
    length: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      count: props.length,
      minutes: howManyMinutes(props.length),
      seconds: howManySeconds(props.length),
    }
  }

  componentDidMount() {
    this.inteval = setInterval(this.inc, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.inteval)
  }

  inc = () => {
    //When not unmounting this appears ever time toggled on
    console.log('Increment!')
    this.setState(prevState => ({
      count: prevState.count === 0 ? 0 : prevState.count - 1,
    }),this.convertToDisplay())
  }

  convertToDisplay = () => {
    this.setState({
      minutes: howManyMinutes(this.state.count),
      seconds: howManySeconds(this.state.count),
    })
  }

  render() {
    return (
      <View>
        <Text style={styles.count}>{this.state.minutes}:{this.state.seconds}
        </Text>
      </View>
    );
  }
}

export default Count
