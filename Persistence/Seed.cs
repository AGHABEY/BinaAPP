using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Apartments.Any()) return;

            var apartments= new List<Apartment>
            {
                new Apartment
                {
                 OwnerName="Ali",
                 OwnerSurname="Aliyev",
                 OwnerPhoneNumber="+994505111234",
                 ApartmentNumber="11",
                 Floor="1",
                 Block="1"
                },
                new Apartment
                {
                 OwnerName="Vali",
                 OwnerSurname="Valiyev",
                 OwnerPhoneNumber="+994505121234",
                 ApartmentNumber="12",
                 Floor="1",
                 Block="1"
                },
                new Apartment
                {
                 OwnerName="Seymur",
                 OwnerSurname="Aliyev",
                 OwnerPhoneNumber="+994505131234",
                 ApartmentNumber="13",
                 Floor="1",
                 Block="1"
                },
                new Apartment
                {
                 OwnerName="Isfendiyar",
                 OwnerSurname="Agayev",
                 OwnerPhoneNumber="+994505141234",
                 ApartmentNumber="21",
                 Floor="2",
                 Block="1"
                },
                new Apartment
                {
                 OwnerName="Test",
                 OwnerSurname="DataAglima gelmedi",
                 OwnerPhoneNumber="+994505114234",
                 ApartmentNumber="110",
                 Floor="7",
                 Block="3"
                },
                 new Apartment
                {
                 OwnerName="Test2",
                 OwnerSurname="DataAglima gelmedi2",
                 OwnerPhoneNumber="+994505124234",
                 ApartmentNumber="120",
                 Floor="8",
                 Block="2"
                },
                 new Apartment
                {
                 OwnerName="Test3",
                 OwnerSurname="DataAglima gelmedi3",
                 OwnerPhoneNumber="+994505164234",
                 ApartmentNumber="1210",
                 Floor="12",
                 Block="4"
                },
                 new Apartment
                {
                 OwnerName="Test4",
                 OwnerSurname="DataAglima gelmedi4",
                 OwnerPhoneNumber="+994505214234",
                 ApartmentNumber="1710",
                 Floor="17",
                 Block="4"
                },
                 new Apartment
                {
                 OwnerName="Test5",
                 OwnerSurname="DataAglima gelmedi5",
                 OwnerPhoneNumber="+994505114224",
                 ApartmentNumber="210",
                 Floor="5",
                 Block="1"
                }
                
            };
            await context.Apartments.AddRangeAsync(apartments);
            await context.SaveChangesAsync();
        }
    }
    
}