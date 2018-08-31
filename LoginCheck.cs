using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FindMyRoomWEbApi.Entity
{
    public class LoginCheck
    {

        [Key]
        public bool isValid { get; set; }
        public string tokenString { get; set; }
    }
}
