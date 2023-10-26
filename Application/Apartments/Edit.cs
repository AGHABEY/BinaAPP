using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Apartments
{
    public class Edit
    {
        public class Command:IRequest
        {
            public Apartment Apartment{get;set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context,IMapper mapper)
            {
               _context=context;
               _mapper=mapper;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var apartment=await _context.Apartments.FindAsync(request.Apartment.Id);

                _mapper.Map(request.Apartment,apartment);
                
                await _context.SaveChangesAsync();
           
            }

            
        }
    }
}