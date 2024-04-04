using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SEAServerBE.Domain.Models
{
    public class User
    {
        [Key]
        public int IdUser { get; set;  }
        
        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "varchar(80)")]
        public string Password { get; set; }
    }
}
