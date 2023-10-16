using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Apartment
    {
        public Guid Id { get; set; }
        public string OwnerName { get; set; }
        public string OwnerSurname { get; set; }
        public string OwnerPhoneNumber { get; set; }
        public string ApartmentNumber { get; set; }
        public string Floor {get;set;}
        public string Block {get;set;}
    }
}