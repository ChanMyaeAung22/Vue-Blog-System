import { ref } from "vue";
import {db} from "../firebase/config"
import { collection,getDocs } from 'firebase/firestore/lite';

let getPosts=()=>{
    let posts=ref([]);
      let error=ref("");
      let load=async()=>{
         try{
            //firebase collection fetch
            let collResponse = collection(db,'posts');
            let documents = await getDocs(collResponse);
            posts.value = documents.docs.map(doc=>{
               return {id:doc.id,...doc.data()};
            })
         }catch(err){
            // console.log(error.message)
            error.value=err.message;
         }
      }
      return {posts,error,load};
}
export default getPosts;