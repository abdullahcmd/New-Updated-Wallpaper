import { object, string} from 'yup';
let userschema = object({
  username: string().required(" Kindly enter valid username").email(),
  password: string().required("Enter Valid Password"),
});
 export let signupSchema = object({
  emailAddress: string().required().email(),
  firstName: string().required(" Kindly enter Your firtName"),
  password: string().required("Enter Valid Password"),
});
export default userschema;
