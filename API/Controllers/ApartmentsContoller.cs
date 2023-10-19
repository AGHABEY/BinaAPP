using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ApartmentsContoller : BaseApiController
    {
        private readonly DataContext _context;
       public ApartmentsContoller(DataContext context)
       {
          _context=context;
       }   

       [HttpGet] //api/apartments
       public async Task<ActionResult<List<Apartment>>> GetApartments()
       {
         return await _context.Apartments.ToListAsync();
       }

       [HttpGet("{id}")]
       public async Task<ActionResult<Apartment>> GetApartment(Guid id)
       {
          return await _context.Apartments.FindAsync(id);
       }
    }

    
}