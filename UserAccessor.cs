using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FindMyRoomWEbApi.Entity;

namespace FindMyRoomWEbApi.DAL
{
    public class UserAccessor
    {
        private readonly FindMyRoom_DatabaseEntities db = new FindMyRoom_DatabaseEntities();
        public List<User> LoginCheckDataAccess()
        {
            List<User> UserDetails = new List<User>();
            try
            {
                UserDetails = db.Users.ToList<User>();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return UserDetails;
        }
    }
}
