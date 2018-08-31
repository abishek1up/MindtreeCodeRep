using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FindMyRoomWEbApi.DAL;
using FindMyRoomWEbApi.Entity;

namespace FindMyRoomWEbApi.BAL
{
    public class UserManager
    {
        private readonly UserAccessor userAccess = new UserAccessor();

        public LoginCheck LoginCheckBusinessLogic(String id)
        {
            LoginCheck Check = new LoginCheck();
            Check.isValid = false;
            String[] s = id.Split('$');
            string Email = s[0];
            string Password = s[1];
            List<User> UserListDetails = userAccess.LoginCheckDataAccess();
            foreach (User U in UserListDetails)
            {
                if ((Email == U.email) && (Password == U.password))
                {
                    Check.isValid = true;
                    UInt64 hashedValue = 3074457345618782421ul;
                    for (int i = 0; i < Email.Length; i++)
                    {
                        hashedValue += Email[i];
                        hashedValue *= 3074457345618258799ul;
                    }
                    Check.tokenString = hashedValue.ToString();
                    break;
                }
            }

            return Check;
        }
    }
}
