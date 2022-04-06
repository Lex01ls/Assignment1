import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, StatusBar,Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  return (
  <>
  <StatusBar/>
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator ={false}>
        <View style={styles.topBarContainer}>
        
          <TouchableOpacity style={styles.NavigationButton}>
            <AntDesign name="back" size={24} color="white" />
          </TouchableOpacity>
              <Text style={{alignSelf:'center'}} style={styles.fontStyling}>Profile</Text>
              <TouchableOpacity style={styles.NavigationButton2}>
               <Ionicons name="menu" size={24} color="white" /></TouchableOpacity>
        </View>

        <View style={styles.headerView}>
         
          <Text style={styles.fontStyling}>Limkokwing University Of Creative Technology</Text>
          <View style={styles.ProfileImage}>
              <Image source={require('./assets/pic.jpg')} style={styles.image} resizeMode="center"> 
              </Image>
          </View>
          <Text style={styles.fontStyling}>Names: Ts'ele kelane</Text>
          <Text style={styles.fontStyling}>Course: BSc in Software Engineering with Multimedia</Text>
          <Text style={styles.fontStyling}>Student ID: 901013554{"\n"}Current Semester: 4</Text>
          <Button title="Log Out"></Button>
        </View>

          <View style={styles.InfoContainer}>
             <View><Text style={styles.fontStyling}>Details{"\n\n"}Gender: Male{"\n"}Nationality: Mosotho {"\n"}Date of Birth: 22/03/2002 </Text></View>
          </View>

          <View style={styles.semester1}>
            <Text style={styles.fontStyling}>
              Semester 1 {"\n\n"}
              Algebra: C {"\n"}Business Communication: C {"\n"}Creative and Innovation Studies: B {"\n"}Fundamental of Design: B+ {"\n"}Introduction to Computer Skills: B- {"\n"}Principles of Programming Logic and Design: C+ {"\n"}GPA: 2.88{"\n"}CGPA: 2.88
            </Text>
          </View>
          <View style={styles.semester2}>
            <Text style={styles.fontStyling}>
              Semester 2 {"\n\n"}
              Introduction to Digital Graphics: A- {"\n"}Introduction to Digital Imaging: B- {"\n"}Calculus: C {"\n"}Introduction to Multimedia: B {"\n"}Introduction to Data Communication: B {"\n"}Introduction to Database: C- {"\n"}Principles of Software Engineering: C+ {"\n"}GPA: 2.92{"\n"}CGPA: 2.89
            </Text>
          </View>
          <View style={styles.semester3}>
            <Text style={styles.fontStyling}>
             Semester 3 {"\n\n"}
              Calculus 2: C- {"\n"}Fundamentals of Internet Technology: C {"\n"}Data Communication and Networking: C- {"\n"}Multimedia Technology: C+ {"\n"}Principles of web design: B {"\n"}C++ Programming 1: C+{"\n"}GPA: 2.67{"\n"}CGPA: 2.67
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarContainer:{
    backgroundColor: 'darkgrey',
    justifyContent:"space-between",
    alignItems: "center",
    flexDirection:"row",
    marginBottom:15,
    marginTop:2,
    marginLeft:2,
    marginRight:2,
  },
  NavigationButton:{
    marginTop:5,
    marginLeft:5,
    
  },
  NavigationButton2:{
    marginTop:5,
    marginRight:5,
  },
  headerView:{
    paddingHorizontal:5,
    backgroundColor: 'blackchocolate',
    alignItems: 'center',
    borderRadius:5,
    marginHorizontal:16,
    justifyContent: 'space-between',
    marginBottom:15
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  
  ProfileImage: {
    
    width: 200,
    height:200,
    borderRadius:95,
    overflow: "hidden",
    backgroundColor: 'slategrey',
    margin:25,
  },

  InfoContainer: {
    margin:25,
    marginTop:25,
    backgroundColor: 'slategrey',
    marginTop:5,
    borderRadius:10,
    justifyContent: "space-evenly",
    padding:25,
    paddingUp:25,
  },
  fontStyling:{
    color: 'white',
    fontSize: 16,
    justifyContent: "space-evenly",
    marginTop:5,
    marginBottom:5,
    marginLeft: 5,
    margin:10
  },
  semester1:{
    backgroundColor: 'grey',
    marginTop:5,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: "space-evenly",
    padding:15,
    margin:25,
  },
  semester2:{
    alignItems: 'center',
    backgroundColor: 'grey',
    marginTop:5,
    borderRadius:10,
    justifyContent: "space-evenly",
    padding:15,
    margin:25,
    
  },
  semester3:{
    backgroundColor: 'grey',
    marginTop:5,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: "space-evenly",
    padding:15,
    margin:25,
  }
  
});
